// src/mocks/handlers.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { RM_API_BASE_URL, RM_CHARACTERS_PATH, RM_LOGIN_PATH } from '../constants/api';
import charactersMock from './charactersMock.json';

export const handlers = [
  rest.get(RM_API_BASE_URL + RM_CHARACTERS_PATH, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(charactersMock));
  }),

  rest.post(RM_API_BASE_URL + RM_LOGIN_PATH, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: '_2392',
        expirationDate: new Date(new Date().getTime() + 15 * 60 * 1000).toISOString(),
      })
    );
  }),
];
