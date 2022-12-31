import { ACTIONS } from '../App';
import { Evaluate } from './Evaluate';

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overrrite) {
        return {
          ...state,
          currOp: payload.digit,
          overrrite: false,
        };
      }
      if (payload.digit === '0' && state.currOp === '0') return state;
      if (payload.digit === '.' && state.currOp === '.') return state;
      return {
        ...state,
        currOp: `${state.currOp || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currOp === null && state.prevOp === null) {
        return state;
      }

      if (state.currOp === null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.prevOp == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOp: state.currOp,
          currOp: null,
        };
      }
      return {
        ...state,
        prevOp: Evaluate(state),
        operation: payload.operation,
        currOp: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.currOP) {
        if (state.overrite) {
          return {
            ...state,
            overrrite: false,
            currOp: null,
          };
        }
        if (state.currOp === null) {
          return state;
        }
        if (state?.currOp?.length === 1) {
          return { ...state, currOp: null };
        }

        return {
          ...state,
          currOp: state.currOp.slice(0, -1),
        };
      } else {
        return state;
      }
    case ACTIONS.EVALUATE:
      if (
        state.operation === null ||
        state.prevOp === null ||
        state.currOp === null
      )
        return { ...state };
      return {
        ...state,
        overrrite: true,
        prevOp: null,
        operation: null,
        currOp: Evaluate(state),
      };
  }
};
