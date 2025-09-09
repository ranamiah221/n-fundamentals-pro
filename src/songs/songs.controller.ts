import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  async findAll() {
    return 'This action returns all songs';
  }
}
