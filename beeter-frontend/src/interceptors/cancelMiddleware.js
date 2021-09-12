import * as axios from "axios";
import {
  CANCEL_ACTION_REQUESTS,
  CANCEL_ALL_ACTION_REQUESTS,
  CANCEL_DATA,
} from "../constants";

const cancelRequest = (token) => {
  token.cancel(CANCEL_DATA);
  token.onCancelCallback && token.onCancelCallback();
};

export const createCancellationMiddleware = () => {
  return (store) => {
    let tokensMap = {};

    return (next) => (action) => {
      const { actionType, payload, type } = action;

      if (payload && payload.request && type) {
        const source = axios.CancelToken.source();
        source.onCancelCallback = payload.request.onCancel;

        // Extend action so that redux-axios-middleware
        // can understand that request is cancellable.
        const cancelableAction = {
          ...action,
          payload: {
            ...payload,
            request: {
              ...payload.request,
              source,
              cancelToken: source.token,
            },
          },
        };

        // Store cancellation token so that we can cancel it
        // later using actions.js in this folder.
        const actionTokens = tokensMap[type] || [];
        actionTokens.push(source);
        tokensMap[type] = actionTokens;

        return next(cancelableAction);
      }

      // Listen for cancel actions and cancel requests appropriately.
      if (type === CANCEL_ACTION_REQUESTS) {
        const actionTokens = tokensMap[actionType];
        if (actionTokens) {
          actionTokens.forEach(cancelRequest);
          tokensMap[actionType] = [];
        }
      } else if (type === CANCEL_ALL_ACTION_REQUESTS) {
        Object.values(tokensMap).forEach((actionTokens) =>
          actionTokens.forEach(cancelRequest)
        );
        tokensMap = {};
      }

      return next(action);
    };
  };
};
