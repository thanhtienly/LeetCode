#
    # Problem: https://leetcode.com/problems/second-highest-salary/
#
# Write your MySQL query statement below
SELECT max(salary) as SecondHighestSalary FROM Employee
WHERE salary < (SELECT max(salary) FROM Employee)