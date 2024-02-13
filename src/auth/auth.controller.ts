import { UseTwitchAuth, TwitchAuthResult } from "@nestjs-hybrid-auth/twitch";
import { Controller, Get, Request } from "@nestjs/common";
import { AppService } from "src/app.service";

@Controller()
export class AuthController {
  constructor(private readonly appService: AppService) {}

  @UseTwitchAuth()
  @Get('auth/twitch')
  loginWithTwitch() {
    return 'Login with Twitch';
  }

  @UseTwitchAuth()
  @Get('auth/twitch/callback')
  twitchCallback(@Request() req): Partial<TwitchAuthResult> {
    const result: TwitchAuthResult = req.hybridAuthResult;
    return {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      profile: result.profile,
    };
  }
}