# Write your MySQL query statement below

SELECT distinct Email from Person GROUP BY Email HAVING COUNT(Email) >= 2