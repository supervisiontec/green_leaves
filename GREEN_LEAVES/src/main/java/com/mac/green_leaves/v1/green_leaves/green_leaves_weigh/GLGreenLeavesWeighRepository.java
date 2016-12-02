/*
 *  GLGreenLeavesWeighRepository.java
 *  
 *  @author Channa Mohan
 *     hjchanna@gmail.com
 *  
 *  Created on Oct 20, 2016, 10:56:57 AM
 *  All rights reserved.
 *  Copyrights supervision technology (pvt.) ltd.
 *  
 */
package com.mac.green_leaves.v1.green_leaves.green_leaves_weigh;

import com.mac.green_leaves.v1.green_leaves.green_leaves_weigh.model.TGreenLeavesWeigh;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Mohan
 */
public interface GLGreenLeavesWeighRepository extends JpaRepository<TGreenLeavesWeigh, Integer> {

    public List<TGreenLeavesWeigh> findByBranchAndNumber(Integer branch, Integer number);

    public List<TGreenLeavesWeigh> findByBranch(Integer branch);

    @Query(value = "SELECT MAX(number) FROM t_green_leaves_weigh WHERE branch=:branch", nativeQuery = true)
    public Integer getMaximumNumberByBranch(@Param("branch") Integer branch);
}
