import { compose } from './helpers/compose';
import { BaseEntity, Entity } from 'typeorm';
import { WithCreatedAt } from 'src/mixins/with-created-at.mixin';
import { WithUpdatedAt } from 'src/mixins/with-updated-at.mixin';
import { WithDeletedAt } from 'src/mixins/with-deleted-at.mixin';
import { WithPrimaryAsUUID } from './mixins/with-primary-as-uuid.mixin';

@Entity()
export class User extends compose(
  BaseEntity,
  WithPrimaryAsUUID,
  WithCreatedAt,
  WithUpdatedAt,
  WithDeletedAt,
) {}
