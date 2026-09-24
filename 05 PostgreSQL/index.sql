
INSERT INTO userProduct(name, brand, contity, price)
VALUES 
    ('keyboard', 'HP', 5, 499.99),
    ('monitor', 'Dell', 3, 8999.99),
    ('notebook', 'Classmate', 20, 45.50),
    ('pen', 'Cello', 50, 10.00),
    ('marker', 'Camlin', 15, 35.00);
-- 
-- SELECT  
--     name AS product_name,
--     brand AS brand_name,
--     contity
-- FROM userProduct
-- WHERE price
-- 

-- SELECT * FROM userProduct

SELECT 
    id,
    name,
    brand,
    price
FROM userProduct
WHERE price NOT BETWEEN 500.0 AND  9000.0;
