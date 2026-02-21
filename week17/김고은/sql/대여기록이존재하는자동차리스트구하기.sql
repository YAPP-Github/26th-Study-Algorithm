-- 코드를 입력하세요
-- 20m 
-- 테이블 join and date 범위 필터링
SELECT DISTINCT(cmy_car.CAR_ID)
FROM CAR_RENTAL_COMPANY_CAR cmy_car JOIN 
    CAR_RENTAL_COMPANY_RENTAL_HISTORY rental_history ON 
    cmy_car.CAR_ID = rental_history.CAR_ID
WHERE rental_history.START_DATE>= '2022-10-01' AND cmy_car.CAR_TYPE = '세단'
ORDER BY cmy_car.CAR_ID DESC