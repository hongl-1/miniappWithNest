import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let res = null;
    try {
      res = next.handle().pipe(
        map((data) => {
          return {
            data,
            code: 200,
            msg: '请求成功',
          };
        }),
      );
    } catch (e) {
      res = next.handle().pipe(
        map(() => {
          return {
            data: e.message,
            code: 500,
            msg: e,
          };
        }),
      );
    }
    return res;
  }
}
