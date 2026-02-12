/*
와일드카드 (LIKE 연산자와 함께 사용)
(1) % : 여러 글자
(2) _ : 한 글자
(3) %키워드% : 포함 검색
(4) 키워드% : 시작 검색
**/
-- 코드를 입력하세요
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY
WHERE ADDRESS like '%강원도%'
ORDER BY FACTORY_ID