import { CreateDateColumn } from 'typeorm';
import { Constructor, Mixin } from '../helpers/compose';

type WithCreatedAtProps = {
  createdAt: Date;
};

export const WithCreatedAt: Mixin<WithCreatedAtProps> = <
  TBase extends Constructor,
>(
  Base: TBase,
) => {
  abstract class WithCreatedAtMixin extends Base {
    @CreateDateColumn()
    createdAt!: Date;
  }

  return WithCreatedAtMixin as unknown as Constructor<
    InstanceType<TBase> & WithCreatedAtProps
  >;
};
