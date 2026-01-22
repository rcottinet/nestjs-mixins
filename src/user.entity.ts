import { compose } from './helpers/compose';
import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';
import { WithCreatedAt } from 'src/mixins/with-created-at.mixin';
import { WithUpdatedAt } from 'src/mixins/with-updated-at.mixin';
import { WithDeletedAt } from 'src/mixins/with-deleted-at.mixin';

@Entity()
export class User extends compose(
  BaseEntity,
  WithCreatedAt,
  WithUpdatedAt,
  WithDeletedAt,
) {
  @PrimaryColumn()
  id: number;
}
