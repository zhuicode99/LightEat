-- SELECT
-- ordered_foods.orderId,
-- SUM (ordered_foods.food_count) as num,
-- foods.name,
-- ordered_foods.food_id,
-- orders.order_date
-- FROM ordered_foods
-- JOIN orders ON ordered_foods.orderId = orders.orderId
-- JOIN foods ON foods.id = ordered_foods.food_id
-- GROUP BY ordered_foods.orderId,
-- foods.name,
-- orders.order_date,
-- ordered_foods.food_id

SELECT of.*
,o.*
,f.name
FROM ordered_foods AS of
JOIN orders AS o ON o.orderId = of.orderId
JOIN foods AS f ON f.id = of.food_id
WHERE o.order_date = CURRENT_DATE


