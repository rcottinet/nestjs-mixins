import { compose } from '../utils/compose';
import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';
import { WithCreatedAt } from 'src/mixins/entity-with-created-at.mixin';
import { WithUpdatedAt } from 'src/mixins/entity-with-updated-at.mixin';
import { WithDeletedAt } from 'src/mixins/entity-with-deleted-at.mixin';

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
