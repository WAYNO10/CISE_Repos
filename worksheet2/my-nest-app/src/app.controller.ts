import { Controller, Get, Param } from '@nestjs/common';
import { ARTICLES } from './dummydata/articles';

@Controller('api/articles')
export class AppController {
  @Get()
  findAll() {
    return ARTICLES;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return ARTICLES.find(a => a.id === +id);
  }
}
