const db = require('../db/db')

const Collection = {

  create: (name, weather, user_id, top_id, bottom_id, shoe_id) => {
    const sql = `
          INSERT INTO collections(name, weather, user_id,top_id,bottom_id,shoe_id)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING *
        `

    return db
      .query(sql, [name, weather, user_id, top_id, bottom_id, shoe_id])
      .then(dbRes => dbRes.rows[0])
  },
  findCollectionByUserId: user_id => {
    const sql = `
      SELECT * FROM collections
      WHERE user_id = $1
    `

    return db
      .query(sql, [user_id])
      .then(dbRes => dbRes.rows)
  },
  findCollectionByCollectionId: collection_id => {
    const sql = `
            SELECT
            collections.id AS collection_id,
            collections.name AS collection_name,
            collections.weather,
            tops.image_url AS top_image_url,
            bottoms.image_url AS bottom_image_url,
            shoes.image_url AS shoe_image_url
          FROM
            collections
          INNER JOIN tops ON collections.top_id = tops.id
          INNER JOIN bottoms ON collections.bottom_id = bottoms.id
          INNER JOIN shoes ON collections.shoe_id = shoes.id
          WHERE
            collections.id = $1
            `




    return db
      .query(sql, [collection_id])
      .then(dbRes => dbRes.rows)
  },

  
  updateById: (collection_id, name) => {
    const sql = `
    UPDATE collections SET name = $1
    WHERE id = $2 
    RETURNING *  ` 
    return db
    .query(sql, [name, collection_id])
    .then(dbRes => dbRes.rows[0])
    },

    deleteById: (collection_id) => {
      const sql =
      'DELETE FROM collections WHERE id = $1' 
      
      return db.query(sql, [collection_id])
    }
    }

module.exports = Collection


