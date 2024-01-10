import { Args, Query, Resolver } from "@nestjs/graphql";
import { ReportService } from "./service/report.service";
import { Customers } from "./models/customers.model";
import { CustomersArgs } from "./dtos/customers-args.dto";

@Resolver(() => Customers)
export class ReportsResolver {
    constructor(
        private readonly reportService: ReportService
    ) { }

    @Query(() => Customers)
    async customer(@Args('_id') id: string): Promise<Customers> {
        const product = await this.reportService.findById(id);
        return product;
    }

    @Query(() => [Customers], {name: 'users'})
    async customers(@Args() args: CustomersArgs): Promise<Customers[]> {
        return await this.reportService.findAll(args);
    }

    @Query(() => Number, {name: 'count'})
    async countCollections(){
        return await this.reportService.getCount();
    }
}