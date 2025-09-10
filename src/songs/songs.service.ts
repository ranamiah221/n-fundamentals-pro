/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateSongDTO } from "./dto/create-song-dto";

@Injectable()
export class SongsService {
    private songs:CreateSongDTO[] =[];

    create(song:CreateSongDTO){
        this.songs.push(song);
        return song;
    }
    findAll():CreateSongDTO[]{
       return this.songs;
    }
}
