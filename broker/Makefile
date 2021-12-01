CC = g++

TARGET		:= can.out

OUT_DIR		:= bin/
SRC_DIR		:= src/
INC_DIR		:= include/
OBJ_DIR		:= .build/
DEP_DIR		:= .deps/

ADD_INCL	:= ../common/include/
ADD_LIBS	:= 

COMPILER_FLAGS	:= $(addprefix -I, $(ADD_INCL))
LINKER_FLAGS :=
DEP_FLAGS = 

SRCS := $(shell find $(SRC_DIR) -name '*.cpp')
OBJS := $(patsubst $(SRC_DIR)%,$(OBJ_DIR)%.o,$(SRCS))


$(OUT_DIR)$(TARGET) : $(OBJS)
	@mkdir -p $(OUT_DIR)
	$(CC) $(LINKER_FLAGS) $^ -o $@

$(OBJS) : $(OBJ_DIR)%.o : $(SRC_DIR)% $(DEP_DIR)%.d | $(DEP_DIR)
	@mkdir -p $(OBJ_DIR)
	$(CC) -MT $@ -MMD -MP -MF $(DEP_DIR)$*.d -c $(COMPILER_FLAGS) $< -o $@

$(DEP_DIR) :
	@mkdir -p $@

DEPFILES := $(patsubst $(OBJ_DIR)%.o,$(DEP_DIR)%.d,$(OBJS))

.PHONY : clean
clean:
	rm -rf $(OBJ_DIR) $(OUT_DIR) $(DEP_DIR)

$(DEPFILES):
include $(wildcard $(DEPFILES))


