import { ArgsType, Field, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@ArgsType()
export class CustomersArgs{

    /**
     * Parametros de quantos registros pular na pesquisa
     */
    @Field(() => Int)
    @Min(0)
    skip: number = 0;
    
    /**
     * Parametros de pegar registros na pesquisa
     */
    @Field(() => Int)
    @Min(1)
    @Max(50)
    take: number = 25;
    
}