import { AuthService } from "../services/auth.service.js";
import {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
} from "../const/jwt.const.js";

export class AuthController {
  static async registerUser(req, res, next) {
    try {
      const userData = req.body;

      await AuthService.registerUser(userData);

      res.status(201).send({ message: "User Registered Successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await AuthService.loginUser(email, password);

      const token = createAccessToken(user._id);

      const refreshToken = createRefreshToken(user._id);

      res.status(200).send({ ...user.toJSON(), token, refreshToken });
    } catch (error) {
      res.status(401).send(error);
    }
  }

  static async refreshAccesToken(req, res, next) {
    try {
      const refreshToken = req.body.refreshToken;

      const user = await AuthService.validateRefreshToken(refreshToken);

      await AuthService.deleteRefreshToken(user, refreshToken);

      const token = createAccessToken(user._id);

      const newRefreshToken = createRefreshToken(user._id);

      await AuthService.saveRefreshToken(user, newRefreshToken);

      return res.status(200).send({ token, newRefreshToken });
    } catch (error) {
      res.sendStatus(403);
    }
  }

  static async logoutUser(req, res, next) {
    try {
      const user = req.user;

      const refreshToken = req.body.newRefreshToken;

      await AuthService.deleteRefreshToken(user, refreshToken);

      res.sendStatus(204);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async logoutAll(req, res, next) {
    try {
      const user = req.user;

      await AuthService.deleteAllRefreshTokens(user);

      res.sendStatus(204);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
