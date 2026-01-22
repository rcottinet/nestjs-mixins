import { UpdateDateColumn } from 'typeorm';
import { Constructor, Mixin } from '../helpers/compose';

type WithUpdatedAtProps = {
  updatedAt: Date;
};

export const WithUpdatedAt: Mixin<WithUpdatedAtProps> = <
  TBase extends Constructor,
>(
  Base: TBase,
) => {
  abstract class WithUpdatedAtMixin extends Base {
    @UpdateDateColumn()
    updatedAt!: Date;
  }

  return WithUpdatedAtMixin as unknown as Constructor<
    InstanceType<TBase> & WithUpdatedAtProps
  >;
};
