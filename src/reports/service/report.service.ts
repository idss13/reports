import { Injectable } from "@nestjs/common/decorators";
import { Customers } from "../models/customers.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CustomersArgs } from "../dtos/customers-args.dto";

@Injectable()
export class ReportService {
    constructor(@InjectModel('Customer') private readonly customersModel: Model<Customers>) {
    }

    async getCount(): Promise<number> {
        return await this.customersModel.countDocuments();
    }

    async findById(id: string): Promise<Customers> {
        return await this.customersModel
            .findOne({
                _id: id
            })
    }

    async findAll(args: CustomersArgs): Promise<Customers[]> {
        const customers: Customers[] = (await this.customersModel
            .find(null, null, {
                limit: args.take,
                skip: args.skip,
            })) as Customers[]

        return customers
    }


}