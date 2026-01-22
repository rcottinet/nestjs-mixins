import { DeleteDateColumn } from 'typeorm';
import { Constructor, Mixin } from '../helpers/compose';

type WithDeletedAtProps = {
  deletedAt: Date;
};

export const WithDeletedAt: Mixin<WithDeletedAtProps> = <
  TBase extends Constructor,
>(
  Base: TBase,
) => {
  abstract class WithDeletedAtMixin extends Base {
    @DeleteDateColumn()
    deletedAt!: Date;
  }

  return WithDeletedAtMixin as unknown as Constructor<
    InstanceType<TBase> & WithDeletedAtProps
  >;
};
