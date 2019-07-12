-- solution 1
-- select id, age, coins_needed, w.power
-- from 
-- (select wp.age, w.code, min(coins_needed) min_coins, power
-- from Wands w
-- join Wands_Property wp on w.code = wp.code
-- where wp.is_evil = 0
-- group by wp.age, w.code, w.power) mc
-- join Wands w on w.code = mc.code and w.power = mc.power and w.coins_needed = mc.min_coins
-- order by w.power desc, age desc

-- solution 2
select id, age, coins_needed, power
from Wands w
join Wands_Property wp on w.code = wp.code
where wp.is_evil = 0

and coins_needed = (
    select min(coins_needed) 
    from Wands w2
    where w2.code = w.code
    and w2.power = w.power
)

order by power desc, age desc