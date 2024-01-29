/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
// controller sẽ nhận yêu cầu từ client, sau đó controller sẽ gọi services để thực hiện các yêu cầu
@Module({
  imports: [AuthModule, UserModule, NoteModule],
})
export class AppModule {}
