import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { AppModule } from './app.module';
import { StatusResolver } from './status.resolver';

@Module({
  imports: [
    AppModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.apollo.gql'),
      sortSchema: true,
    }),
  ],
  providers: [StatusResolver],
})
export class ExpressModule {}
