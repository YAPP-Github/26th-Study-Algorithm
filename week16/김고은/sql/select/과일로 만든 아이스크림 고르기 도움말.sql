/**
join은 테이블 합치기 위해 사용
- INNER JOIN: 양쪽 테이블에 모두 존재하는 행만 반환
- LEFT JOIN: 왼쪽 테이블의 모든 행과 오른쪽 테이블의 일치하는 행 반환
- RIGHT JOIN: 오른쪽 테이블의 모든 행과 왼쪽 테이블의 일치하는 행 반환
- FULL JOIN: 양쪽 테이블의 모든 행 반환

FROM 절에서 JOIN을 사용하여 두 테이블을 합치고, WHERE 절에서 조건을 지정하여 원하는 데이터를 필터링
*/
SELECT f.FLAVOR
FROM FIRST_HALF f 
    JOIN ICECREAM_INFO i ON f.FLAVOR = i.FLAVOR
WHERE f.TOTAL_ORDER > 3000 
    AND i.INGREDIENT_TYPE = 'fruit_based'