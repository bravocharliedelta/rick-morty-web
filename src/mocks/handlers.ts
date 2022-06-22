// src/mocks/handlers.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { CHARACTERS_API } from '../constants/api';
import charactersMock from './charactersMock.json';

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get(CHARACTERS_API, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(charactersMock));
  }),
];
