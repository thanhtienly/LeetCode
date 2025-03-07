#
    # Problem: https://leetcode.com/problems/combine-two-tables/
#
# Write your MySQL query statement below

SELECT P.lastName, P.firstName, A.city, A.state FROM Person as P
LEFT JOIN Address as A
ON P.personId = A.personId