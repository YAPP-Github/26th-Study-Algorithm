/*
1. GROUP BY는 "요약 결과"만 만든다
   - CATEGORY별 MAX(PRICE)는 구할 수 있지만,
   - 그 가격을 가진 실제 PRODUCT_NAME 정보는 사라진다.
   - 즉, 집계 결과만으로는 어떤 상품인지 알 수 없음.

2. 우리가 필요한 것은
   - 카테고리별 최고 가격 자체가 아니라
   - "그 최고 가격을 가진 실제 상품 row"

3. 그래서 2단계로 나눈다
   (1) 서브쿼리: CATEGORY별 MAX(PRICE) 구하기
   (2) 바깥쿼리: 그 CATEGORY + PRICE 조합과 일치하는 실제 row 찾기

4. WHERE (컬럼1, 컬럼2) IN (...) 문법
   - 여러 컬럼을 하나의 묶음(tuple)으로 비교하는 문법
   - 아래 의미와 동일:

       (CATEGORY = '과자' AND PRICE = 3000)
       OR
       (CATEGORY = '국' AND PRICE = 8000)
       ...

   - 단순히 PRICE IN (...) 만 쓰면
     다른 CATEGORY의 같은 가격도 함께 조회될 수 있으므로
     CATEGORY와 PRICE를 함께 비교해야 정확하다.

[정리]
   - GROUP BY = 데이터 요약 (row 정보 일부 소실)
   - 실제 row가 필요할 때는
     -> 서브쿼리 또는 JOIN으로 다시 매칭해야 한다.
*/

-- 코드를 입력하세요
SELECT CATEGORY, PRICE, PRODUCT_NAME
FROM FOOD_PRODUCT
WHERE (CATEGORY, PRICE) IN (
    SELECT CATEGORY, MAX(PRICE)
    FROM FOOD_PRODUCT
    WHERE CATEGORY IN ('과자', '국', '김치', '식용유')
    GROUP BY CATEGORY
)
ORDER BY PRICE DESC;