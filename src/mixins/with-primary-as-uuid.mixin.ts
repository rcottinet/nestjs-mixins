import { PrimaryGeneratedColumn } from 'typeorm';
import { Constructor, Mixin } from '../helpers/compose';

type WithPrimaryAsUUIDProps = {
  id: string;
};

export const WithPrimaryAsUUID: Mixin<WithPrimaryAsUUIDProps> = <
  TBase extends Constructor,
>(
  Base: TBase,
) => {
  abstract class WithPrimaryAsUUIDMixin extends Base {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  }

  return WithPrimaryAsUUIDMixin as unknown as Constructor<
    InstanceType<TBase> & WithPrimaryAsUUIDProps
  >;
};
