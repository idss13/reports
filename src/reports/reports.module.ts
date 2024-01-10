import { Module } from '@nestjs/common';
import { ReportService } from './service/report.service';
import { ReportsResolver } from './report.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Customer',
                schema: CustomerSchema
            }
        ]),
    ],
    providers: [
        ReportService,
        ReportsResolver
    ]
})
export class ReportsModule { }
