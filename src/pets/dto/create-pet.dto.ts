import { ApiProperty } from "@nestjs/swagger";

export class CreatePetDto {

  @ApiProperty()
  Name: string;

  @ApiProperty()
  Species: string;

  @ApiProperty()
  Breed: string;

  @ApiProperty()
  Age: number;

  @ApiProperty()
  Owner: string;

  @ApiProperty()
  hireDate: Date;

  @ApiProperty()
  status: string;
}
