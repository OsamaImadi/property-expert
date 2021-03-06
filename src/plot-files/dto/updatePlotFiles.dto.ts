import {
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class UpdatePlotFilesDto {

  @IsString()
  @IsOptional()
  fileNo: string;

  @IsString()
  @IsOptional()
  fileSecurityNo: string;

  @IsString()
  @IsOptional()
  fileType: string;

  @IsString()
  @IsOptional()
  projectName: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsString()
  @IsOptional()
  assignedTo: string;

  @IsString()
  @IsOptional()
  assignedDate: string;

  @IsString()
  @IsOptional()
  recievedBy: string;

  @IsString()
  @IsOptional()
  recievedDate: string;

  @IsString()
  @IsOptional()
  companyName: string;

  @IsNumber()
  @IsOptional()
  unitPrice: number;

  @IsNumber()
  @IsOptional()
  minimumRequiredDeposit: number;
}
