CC = g++

TARGET		:= default.out

BIN_DIR		:= bin/
SRC_DIR		:= src/
INC_DIR		:= include/
OBJ_DIR		:= .build/
DEP_DIR		:= .deps/

ADD_INCL	:= ../common/include
ADD_LIBS	:= 

COMPILER_FLAGS	:= $(addprefix -I, $(ADD_INCL))
LINKER_FLAGS :=
DEP_FLAGS = 

SRCS := $(wildcard $(SRC_DIR)*.cpp)
OBJS := $(patsubst $(SRC_DIR)%,$(OBJ_DIR)%.o,$(SRCS))

$(BIN_DIR)$(TARGET) : $(OBJS)
	@mkdir -p $(dir $@)
	$(CC) $(LINKER_FLAGS) $^ -o $@

$(OBJS) : $(OBJ_DIR)%.o : $(SRC_DIR)% $(DEP_DIR)%.d | $(DEP_DIR)
	@mkdir -p $(dir $@)
	$(CC) -MT $@ -MMD -MP -MF $(DEP_DIR)$*.d -c $(COMPILER_FLAGS) $< -o $@

$(DEP_DIR) :
	@mkdir -p $(dir $@)

DEPFILES := $(patsubst $(OBJ_DIR)%.o,$(DEP_DIR)%.d,$(OBJS))

.PHONY : clean
clean:
	rm -rf $(OBJ_DIR) $(BIN_DIR) $(DEP_DIR)

$(DEPFILES):
include $(wildcard $(DEPFILES))


