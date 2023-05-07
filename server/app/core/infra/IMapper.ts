export interface IMapper<Entity,Model,DTO>{
  toEntity(model: Model): Entity;
  toModelAsync?(entity: Entity): Promise<Model>;
  toModel?(entity: Entity): Model;
  toResponse(entity: Entity): DTO;
}