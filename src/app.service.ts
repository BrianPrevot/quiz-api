import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { configDotenv } from 'dotenv';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  
}
