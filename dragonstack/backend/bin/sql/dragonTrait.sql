CREATE TABLE dragonTrait(
  "traitId"  INTEGER,
  "dragonId" INTEGER,
  FOREIGN KEY ("traitId")  REFERENCES trait(id),
  FOREIGN key ("dragonId") REFERENCES dragon(id)
);