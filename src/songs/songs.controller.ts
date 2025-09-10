/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDTO } from "./dto/create-song-dto";

@Controller("songs")
export class SongsController {
  constructor(private readonly songsService: SongsService){}
  @Post()
  async create(@Body() createSongDTO: CreateSongDTO){
    return this.songsService.create(createSongDTO)
  }
  @Get()
  async findAll() {
    return this.songsService.findAll();
  }
}
