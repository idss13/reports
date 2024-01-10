import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Customers {
    @Field((type) => ID)
    _id: string;

    @Field()
    name: string;

    @Field()
    document: string;

    @Field()
    email: string;
}