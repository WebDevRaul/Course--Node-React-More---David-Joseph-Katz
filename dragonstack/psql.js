// For git bash users run the command chcp.com 1252 before running postgres

// dragonstackdb=# select * from dragon INNER JOIN dragonTrait ON dragon.id = dragonTrait."dragonId" INNER JOIN trait ON dragonTrait."traitId" = trait.id;