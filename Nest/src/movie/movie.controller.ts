import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  getAll(): string {
    return 'This is movie router!';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return movieId + 'does not exist';
  }

  @Post()
  create() {
    return 'Post';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return 'nothing';
  }

  @Patch('/:id')
  update(@Param('id') movieId: string) {
    return 'patch';
  }
}
