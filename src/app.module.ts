import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MessageModule } from './message/message.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [
    MessageModule,
    MongooseModule.forRoot("mongodb+srv://daniel_shcherban:283014@kursova.gqvmi.mongodb.net/kursova?retryWrites=true&w=majority"),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    // TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({ rootPath: `${process.cwd()}/public` }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
