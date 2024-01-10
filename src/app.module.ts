import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    //Configuração de conexão do banco de dados MongoDB
    MongooseModule.forRoot(
      'mongodb://127.0.0.1/dbestudo',
      {
        user: 'usitalo',
        pass: 'DbMaster0491',
      }
    ),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //debug: false,
      //playground: false,
      installSubscriptionHandlers: true,
      autoSchemaFile: ('src/schema.gql'),
    }),

    ReportsModule,

  ],
  /* controllers: [],
  providers: [], */
})
export class AppModule { }
