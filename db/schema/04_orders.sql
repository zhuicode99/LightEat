DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  order_date DATE NOT NULL DEFAULT now(),
  orderId VARCHAR(255) NOT NULL,
  order_completed BOOLEAN NOT NULL DEFAULT FALSE
);
