import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength,  } from "class-validator";

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @MinLength(3)
    fullName: string;

    @IsOptional()
    @IsString()
    phoneNumber?:string;

    @IsOptional()
    @IsString()
    address?:string;
}