import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

//at first instance of powerService is created and given to CpuService constructor
@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
