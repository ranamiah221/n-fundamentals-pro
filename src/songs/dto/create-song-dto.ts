/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsArray, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  readonly aritsts: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date;
}
