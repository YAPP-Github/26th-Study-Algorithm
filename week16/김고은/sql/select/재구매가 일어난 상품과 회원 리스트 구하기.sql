-- 중복 찾기 -> GROUP BY 로 묶어서 HAVING 조건 걸어주기 
-- 코드를 입력하세요
SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
-- 단순 재구매가 아니라, 동일 상품 재구매인 경우 찾기
GROUP BY USER_ID, PRODUCT_ID 
HAVING count(*) >= 2
ORDER BY USER_ID ASC, PRODUCT_ID DESC